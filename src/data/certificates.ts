export interface CertificateItem {
  id: string;
  title: string;
  issuer: 'Cisco Networking Academy' | 'DataCamp' | 'Coursera / University of Michigan';
  issuerCategory: 'Networking' | 'Databases & SQL' | 'Python & Data' | 'Computer Science';
  year: string;
  pdfUrl: string;
  description: string;
  skills: string[];
  verificationBadge: string;
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    issuerCategory: 'Networking',
    year: '2025',
    pdfUrl: '/certificates/Networking_Basics-Balion_AngelAmaya.pdf',
    description: 'Foundational computer networking covering TCP/IP protocol stack, IPv4/IPv6 subnetting, network media, and packet routing architectures.',
    skills: ['TCP/IP', 'IPv4/IPv6 Subnetting', 'Network Protocols', 'Packet Routing', 'Network Security'],
    verificationBadge: 'Verified Academy Credential'
  },
  {
    id: 'datacamp-intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    issuerCategory: 'Databases & SQL',
    year: '2026',
    pdfUrl: '/certificates/Intermediate_SQL-Balion_AngelAmaya.pdf',
    description: 'Advanced relational database querying including subqueries, nested CTEs, aggregate window functions, and complex joins.',
    skills: ['PostgreSQL', 'Complex Subqueries', 'Window Functions', 'Relational Joins', 'Query Optimization'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'datacamp-introduction-to-sql',
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    issuerCategory: 'Databases & SQL',
    year: '2026',
    pdfUrl: '/certificates/Introduction_to_SQL-Balion_AngelAmaya.pdf',
    description: 'Core relational database fundamentals, filtering, sorting, indexing, aggregation, and relational schema navigation.',
    skills: ['SQL Syntax', 'SELECT Queries', 'Filtering & Sorting', 'Aggregations', 'Schema Navigation'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'datacamp-joining-data-pandas',
    title: 'Joining Data with pandas',
    issuer: 'DataCamp',
    issuerCategory: 'Python & Data',
    year: '2026',
    pdfUrl: '/certificates/Joining_Data_with_Pandas-Balion_AngelAmaya.pdf',
    description: 'Relational data combinations in Python using pandas: inner, outer, left, and cross merges, semi/anti joins, and concatenated DataFrames.',
    skills: ['Python', 'pandas', 'Relational Merges', 'Semi/Anti Joins', 'Data Reconciliation'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'datacamp-data-manipulation-pandas',
    title: 'Data Manipulation with pandas',
    issuer: 'DataCamp',
    issuerCategory: 'Python & Data',
    year: '2026',
    pdfUrl: '/certificates/Data_Manipulation_with_Pandas-Balion_AngelAmaya.pdf',
    description: 'Transforming, slicing, indexing, aggregating, and reshaping tabular datasets with high-performance pandas routines.',
    skills: ['pandas DataFrames', 'Data Wrangling', 'Pivoting & Reshaping', 'Summary Statistics'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'datacamp-intermediate-python',
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    issuerCategory: 'Python & Data',
    year: '2026',
    pdfUrl: '/certificates/Intermediate_Python-Balion_AngelAmaya.pdf',
    description: 'Advanced logic control, custom comparison loops, dictionaries, pandas data structures, and Matplotlib visualizations.',
    skills: ['Data Structures', 'Matplotlib', 'Logic Flow Control', 'pandas Integration'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'datacamp-introduction-to-python',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    issuerCategory: 'Python & Data',
    year: '2026',
    pdfUrl: '/certificates/Introduction_to_Python-Balion_AngelAmaya.pdf',
    description: 'Fundamental Python programming: variables, lists, mathematical functions, methods, and NumPy array operations.',
    skills: ['Python Syntax', 'NumPy Arrays', 'Functions & Methods', 'List Manipulation'],
    verificationBadge: 'Verified DataCamp Statement'
  },
  {
    id: 'coursera-python-data-structures',
    title: 'Python Data Structures',
    issuer: 'Coursera / University of Michigan',
    issuerCategory: 'Computer Science',
    year: '2022',
    pdfUrl: '/certificates/Python_Data_Structures-Balion_AngelAmaya.pdf',
    description: 'Core computer science data structures in Python: lists, dictionaries, tuples, and file stream parsers instructed by Dr. Charles Severance.',
    skills: ['Data Structures', 'Tuples & Dictionaries', 'File I/O Streams', 'Algorithmic Complexity'],
    verificationBadge: 'Verified Coursera Certificate'
  },
  {
    id: 'coursera-programming-for-everybody',
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera / University of Michigan',
    issuerCategory: 'Computer Science',
    year: '2022',
    pdfUrl: '/certificates/Programming_for_Everybody-Balion_AngelAmaya.pdf',
    description: 'Algorithmic programming principles, variables, conditional execution, repeated execution with loops, and function abstractions.',
    skills: ['Procedural Programming', 'Conditionals & Loops', 'Functional Decomposition'],
    verificationBadge: 'Verified Coursera Certificate'
  }
];
