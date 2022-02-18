import { Button } from 'grommet';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

export interface NavItemProps {
    route: string;
    label: string;
}

export const NavItem : React.FC<NavItemProps> = (props) => {

    const navigate = useNavigate()
    const path = useResolvedPath(props.route)
    const match = useMatch(path.pathname)

    return (
        <Button
            secondary
            color="white"
            active={match != null}
            label={props.label}
            hoverIndicator
            alignSelf="center"
            onClick={() => navigate(props.route)}
        />
    )
}