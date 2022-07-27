const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', overflowX: 'hidden', height:'87vh'}}>
            {props.children}
        </div>
    );
};


export default Scroll;