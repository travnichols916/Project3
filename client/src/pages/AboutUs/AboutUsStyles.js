import { borderRadius, maxHeight, maxWidth } from "@mui/system";

const gridSectionStyles = {
    padding: 1,
    marginBottom: '2rem',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    background: '#fff'
  }
  
  const gridStyles={
    padding: 1
  };
  
  const imageStyles={
    width: '100%',
    borderRadius: '5%',
    maxHeight: '300px',
    maxWidth: '300px'
  }
  
  export {gridSectionStyles, gridStyles, imageStyles};