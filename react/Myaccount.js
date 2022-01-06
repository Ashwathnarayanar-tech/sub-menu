import React, { Component } from 'react'
import styles from './Myaccount.css'
import Accordion from "./Model/Accordion";
// import myAcIcon from '../../../assets/my-account.svg'



const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [head, ...tail] = React.Children.toArray(children);

    return (
        <div className={styles.menu} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            {head} {isOpen && <div className={styles.open}>{tail}</div>}
        </div>
    );
};

const Item = ({ children, link }) => {
    return (
        <div className={styles.item}>
            <a className={styles.a} href={link}>{children}</a>
        </div>
    );
};

export class Myaccount extends Component {
    constructor(props) {
        super(props)
        // console.log(111111, this.props);
    }



    render() {
        return (
            <div>
                <Menu>

                    {
                        this.props.menus.map(menu => {
                            if (menu.children && menu.children.length) {
                                return (
                                    <Accordion>{[
                                        <div label={menu.name} className={styles.modelAccordion}>
                                            <div className={styles.tabContentContainer}>
                                                <div className={styles.carModelContainer}>
                                                    <ul className={styles.modelRange}>
                                                        {menu.children.map((child) => {

                                                            if (child.img) {
                                                                return <Item link={child.link}><img src={child.img} style={{ paddingRight: "6px" }} />{child.name}</Item>
                                                            } else {
                                                                return <Item link={child.link}>{child.name}</Item>
                                                            }

                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    ]

                                    }

                                    </Accordion>
                                );
                            }
                            else if (menu.img) {
                                return <Item link={menu.link}><img src={menu.img} style={{ paddingRight: "6px" }} />{menu.name}</Item>
                            } else {
                                return <Item link={menu.link}>{menu.name}</Item>
                            }


                        })
                    }

                    {/* <Item link="/wishlist">My Wishlist</Item> */}
                    {/* <Item link="/checkout">My Cart</Item> */}
                    {/* <Item link="/checkout">Checkout</Item> */}
                    {/* <Item link="/login">Register</Item> */}
                    {/* <Item link="/login">Login</Item> */}

                </Menu>
            </div>
        )
    }
}

export default Myaccount