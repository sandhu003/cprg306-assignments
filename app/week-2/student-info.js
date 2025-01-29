import Link from 'next/link';
import React from 'react';

export default function StudentInfo() {
  return (
    <div>
      <h1>Manjinder Singh</h1>
      <p> 
        <Link href="https://github.com/sandhu003/cprg306-assignments.git" >
        My Github Repository
        </Link>
      </p>
    </div>
  );
}


