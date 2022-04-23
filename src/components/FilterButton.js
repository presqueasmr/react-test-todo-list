function FilterButton(props) {
    return (
        <div>
        <button type="button" className="filterBtn" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
          {props.name}
        </button>
        
    </div>
    );
}

export default FilterButton;
  