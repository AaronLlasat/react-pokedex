const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', overflowX: 'hidden', height:'82vh'}}>
            {props.children}
        </div>
    );
};


export default Scroll;