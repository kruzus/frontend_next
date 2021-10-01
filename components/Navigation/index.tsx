import style from "../../styles/nav.module.scss"

const Navigation: React.FC = () => {
  return (
  <>
  <div className={style.item}>
    Game reviews by real <span className={style.gamers}>gamers</span>, and <span className={style.real}>real</span> people.
  </div>
  </>
  )
}

export default Navigation
