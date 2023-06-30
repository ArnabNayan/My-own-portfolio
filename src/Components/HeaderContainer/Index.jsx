import './styles.css';


const HeaderContainer = (props) => {
   // eslint-disable-next-line react/prop-types
   const {headerText,icon}=props;

    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    );
};

export default HeaderContainer;