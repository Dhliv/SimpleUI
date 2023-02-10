import { Grid } from "@mui/material";
import "./styles.css";

/**
 * 
 * @param {{selected: string, categories: string[], setSelected: function}} props 
 * @returns 
 */
export default function MovieBreadcrumbs(props) {

  const handleClick = (e) => {
    const id = e.target.id;
    props.setSelected(id);
  }

  const Breadcrumbs = () => {
    let display = [];

    for (let i = 0; i < props.categories.length; i++) {
      if (i > 0) {
        display.push(
          <Grid key={`grid-${i * 2}`} item>
            <p key={`divisor-${i}`} className="category-divisor">{"/"}</p>
          </Grid>
        );
      }

      display.push(
        <Grid key={`grid-${i * 2 + 1}`} item>
          <p onClick={handleClick} id={props.categories[i]} key={`Ty-${i}`} className={"category-text" + (props.selected === props.categories[i] ? "-selected" : "")}>
            {props.categories[i]}
          </p>
        </Grid>);
    }

    return display;
  }
  return (
    <Breadcrumbs />
  )
}