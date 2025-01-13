export default function MySharedButton({ onClick, count }) {
  return (
    <div>
      <button onClick={onClick}>点了 {count} 次</button>
    </div>
  )
}
