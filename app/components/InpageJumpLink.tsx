interface Props {
  href: string
  title: string
  isActive?: boolean
}
export default function InpageJumpLink(props: Props) {
  return (
    <li>
      <a
        href={props.href}
        className={`group flex items-center py-3 ${props.isActive && 'active'}`}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span>{props.title}</span>
      </a>
    </li>
  )
}
