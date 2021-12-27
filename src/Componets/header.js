import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuIcon from '@mui/icons-material/Menu';
import '../Componets/head.scss';

export default function Header() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <BottomNavigation className='bottomNav' fixed="bottom" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: "100%" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          className="icon"
          label="Home"
          value="Home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          className="icon"
          label="Search"
          value="Search"
          icon={<SearchOutlinedIcon />}
        />
        <BottomNavigationAction
          className="icon"
          label="Movies"
          value="Movies"
          icon={<OndemandVideoOutlinedIcon />}
        />
        <BottomNavigationAction
          className="icon"
          label="Downlord"
          value="Downlord"
          icon={<FileDownloadIcon />}
        />
        <BottomNavigationAction className="icon" label="More" value="More" icon={<MenuIcon />} />
      </BottomNavigation>
    </section>
  );
}
