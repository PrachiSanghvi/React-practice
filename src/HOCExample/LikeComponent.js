import HOC from './HOC'
const LikeComponent = ({ countNumber, handleClick }) => {
  return (
    <div>
      count - {countNumber}
      <button onClick={handleClick}>Like👍🏻</button>
    </div>
  )
}

const EnhancedLikes = HOC(LikeComponent);
export default EnhancedLikes;