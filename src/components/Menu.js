import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://beartigerproductions.com" target="_blank" rel="noreferrer">Directing</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/teaching_and_training">Teaching and Training</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://kapmgmt.paynterperformance.com" target="_blank" rel="noreferrer">Talent Management</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/workplace_and_career">Workplace and Career</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://linktr.ee/paynterperformance" target="_blank" rel="noreferrer">Programs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://g.co/kgs/DMLGZq" target="_blank" rel="noreferrer">Testimonials</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://www.youtube.com/playlist?list=PLSRJurNadm4enwGT53-0xjEYLDpj7mV4p" target="_blank" rel="noreferrer">Additional Resources</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
