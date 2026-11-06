'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitalFallback } from './OrbitalFallback';

export function OrbitalCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check for mobile or reduced motion preference
    const checkMedia = () => {
      const isSmallScreen = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isSmallScreen || prefersReducedMotion) {
        setIsMobile(true);
        return true;
      }
      setIsMobile(false);
      return false;
    };

    if (checkMedia()) return;

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLAvailable(false);
        return;
      }
    } catch {
      setWebGLAvailable(false);
      return;
    }

    // Three.js Scene Setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      setWebGLAvailable(false);
      return;
    }

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x29183b, 2.5);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xa77beb, 5, 12);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8c5ff, 2.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7041a6, 1.8);
    dirLight2.position.set(-5, -5, -4);
    scene.add(dirLight2);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x7041a6,
      emissive: 0xa77beb,
      emissiveIntensity: 0.9,
      roughness: 0.25,
      metalness: 0.4,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerCore);

    // Outer Translucent Glass Hemisphere / Sphere
    const glassGeo = new THREE.SphereGeometry(1.35, 32, 32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xf6f3fa,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.88,
      thickness: 1.4,
      ior: 1.5,
      transparent: true,
      opacity: 0.65,
    });
    const glassSphere = new THREE.Mesh(glassGeo, glassMat);
    rootGroup.add(glassSphere);

    // Orbital Metallic Rings
    // Ring 1 (Electric Lavender)
    const ring1Geo = new THREE.TorusGeometry(2.05, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xd8c5ff,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.set(Math.PI / 3.2, 0.2, 0);
    rootGroup.add(ring1);

    // Ring 2 (Royal Violet)
    const ring2Geo = new THREE.TorusGeometry(2.55, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa77beb,
      metalness: 0.85,
      roughness: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.set(-Math.PI / 3.8, 0.45, 0.3);
    rootGroup.add(ring2);

    // Ring 3 (Outer Muted Orbit)
    const ring3Geo = new THREE.TorusGeometry(3.0, 0.025, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x7041a6,
      metalness: 0.9,
      roughness: 0.3,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.set(0.35, -Math.PI / 2.8, 0.5);
    rootGroup.add(ring3);

    // Particle Cloud / Stardust Field
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd8c5ff,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleCloud);

    // Mouse Tracking with Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      // Clamp rotation drift to <= 8 degrees (~0.14 radians)
      targetX = THREE.MathUtils.clamp(x * 0.16, -0.14, 0.14);
      targetY = THREE.MathUtils.clamp(-y * 0.16, -0.14, 0.14);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Visibility & Viewport Intersection Controls
    let isRendering = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          isRendering = entry.isIntersecting && !document.hidden;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isRendering = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isRendering) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Continuous passive rotation
      rootGroup.rotation.y += 0.003;

      // Mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      rootGroup.rotation.x = mouseY;
      rootGroup.rotation.z = mouseX;

      // Relative ring counter-rotations
      ring1.rotation.z += delta * 0.25;
      ring2.rotation.z -= delta * 0.35;
      ring3.rotation.y += delta * 0.18;

      // Core gentle breathing
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.035;
      innerCore.scale.set(pulse, pulse, pulse);
      innerMat.emissiveIntensity = 0.85 + Math.sin(elapsedTime * 2.5) * 0.2;

      // Particles orbit
      particleCloud.rotation.y += delta * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();

      // Dispose Three.js objects
      innerGeo.dispose();
      innerMat.dispose();
      glassGeo.dispose();
      glassMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  if (isMobile || !webGLAvailable) {
    return <OrbitalFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Violet Orbital Core Canvas"
    />
  );
}
