import Image from "next/image";
import Link from 'next/link'
import RouterLink from '../routerLink'

export default function page1() {
  const list = ['aaa', 'bbb', 'ccc']

  return (
    <div>
      <div>page2</div>
      {
        list.map(item => <p key={item}>{item}</p>)
      }
      <RouterLink></RouterLink>
    </div>
  );
}
