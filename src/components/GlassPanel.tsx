interface Props {
  children?: JSX.Element | JSX.Element[];
}
export default function GlassPanel(props: Props) {
  return <div className="glass-effect">{props.children}</div>;
}
