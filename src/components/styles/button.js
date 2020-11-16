import styled from 'styled-components';

const Button = styled.button`

    &.functional {
        cursor:pointer;
        display:inline-block;
        transition: all .2s ease-in-out;
        box-shadow: 0 0.25rem 0.55rem rgba(65,145,255,.35);
        &:not(:last-child) {
            margin-right: .5rem;
        }
        &:hover {
            transform: translateY(-3px);
        }
        &:focus {
            outline: none;
        }
        &:active {
            transform: translateY(0);
        }
    }

    &.mlr {
        margin:0 1rem;
    }

    &.reset {
        cursor:pointer;
        display: inline-block;
        border:none;
        outline:none;
        &:focus {
            outline:none;
        }
    }

    &.square {
        padding: .8rem 1.5rem;
        font-size: .9rem;
        font-weight:700;
        border-radius: 5px;
        letter-spacing: -.05rem;
        text-transform:uppercase;
    }

    &.rounded {
        padding: 1rem 1.7rem;
        border-radius: 100px;
        font-size: 1rem;
    }
    &.lightblue {
        background-color:#DEEBFE;
        color:#4191FF;
        box-shadow:none;
        &:hover {
            background:#4191FF;
            color: #FFFFFF;
        }
    }

    &.more {
        background:none;
        font-size: .9rem;
        transition: all .2s ease-in;
        position: relative;
        &:hover {
            transform: translateY(-1px);
        }
        &:before {
            transition: all .2s ease-in;
            content:"";
            position: absolute;
            height: 2px;
            width: 90%;
            transform: scale(0);
            bottom:-1px;
            left:5px;
        }
        &:hover:before {
            transform: scale(1);
        }

    }
    &.green {
        color:#1BC943;

        &:before {
            background: #1BC943;
        }
    }

    &.blue {
        color:#4191FF;

        &:before {
            background: #4191FF;
        }
    }

    &.orange {
        color:#F4772E;

        &:before {
            background: #F4772E;
        }
    }

    &.bluebg {
        background-color: #4191FF;
        color: #FFFFFF;
    }

    &.mtb-1 {
        margin: 1rem 0;
    }

`;

export default Button;