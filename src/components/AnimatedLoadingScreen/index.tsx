import { Animation } from "./style";


const AnimatedLoadingScreen : React.FC = () => {
    return (
        <Animation>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
          <div className={"obj"}></div>
        </Animation>
    )
}

export default AnimatedLoadingScreen;