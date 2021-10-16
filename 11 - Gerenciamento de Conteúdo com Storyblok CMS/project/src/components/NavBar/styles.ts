import styled from 'styled-components'

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 70px;

    position: relative;

    @media (max-width: 975px) {
        padding: 30px 30px;

        img {
            width: 90px;
            height: 43px;
        }

        div.menu-active {
            display: flex;
            flex-direction: column;
            width: 100%;

            position: absolute;
            z-index: 100;
            top: 100%;

            left: 0;

            background-color: #ffffff;

            animation: menu-animation 0.4s ease-in;

            @keyframes menu-animation {
                from {
                    max-height: 0;
                }
                to {
                    max-height: 200px;
                }
            }
        }

        div.menu-active a:hover {
            background-color: #f1f1f1;
        }

        div.active {
            .line-1 {
                transform: rotate(-45deg) translate(-8px, 8px);
            }
            .line-2 {
                opacity: 0;
            }
            .line-3 {
                transform: rotate(45deg) translate(-5px, -7px);
            }
        }
    }
`

export const Navlinks = styled.div`
    font-family: 'Poppins', 'sans-serif';
    font-weight: 500;
    font-size: 20px;

    display: none;
    align-items: center;

    overflow: hidden;

    list-style: none;

    a {
        width: 100%;
        color: inherit;
        text-decoration: none;
        text-align: center;
        padding: 10px 0;
    }

    a:hover {
        font-weight: 600;
        text-decoration: underline;
    }

    @media (min-width: 975px) {
        display: flex;
        gap: 34px;

        a {
            padding: 0;
        }
    }
`

export const MenuIcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    cursor: pointer;

    width: 32px;
    height: 32px;

    [class*='line-'] {
        width: 32px;
        height: 2px;
        background-color: #000000;

        transition: 0.3s;
    }

    @media (min-width: 975px) {
        display: none;
    }
`
