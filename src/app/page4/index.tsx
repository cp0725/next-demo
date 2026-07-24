'use client';

export default function List() {
  const list = ['abc', 'def', 'ghe']

  return (
    <div>
      {
        list.map(item => <p key={item}>{item}</p>)
      }
    </div>
  );
}
