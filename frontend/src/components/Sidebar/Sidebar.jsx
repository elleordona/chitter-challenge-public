// sidebar component

// imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';

const Sidebar = () => {
	return (
		<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
			<CDBSidebar textColor="#fff" backgroundColor="#333">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
						Chitter
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<NavLink exact to="/" activeclassname="activeClicked">
							<CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/add" activeclassname="activeClicked">
							<CDBSidebarMenuItem icon="pen">Compose Peep</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/profile" activeclassname="activeClicked">
							<CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/login" activeclassname="activeClicked">
							<CDBSidebarMenuItem icon="book">Login/Register</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: 'center' }}>
					<div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
						Digital Futures Academy
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
