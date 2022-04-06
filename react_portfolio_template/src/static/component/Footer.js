import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
    /* display: ${props => props.display===1 ? '' : 'none'}; */
    border-top: 10px solid #0091da;
    color: #333;
    font-family: "Open Sans", "Arial";
    a {
        text-decoration: none;
        color: inherit;
        &:hover{
            text-decoration: underline;
        }
    }
    // WHITE ROW1
    .content1{
        display: flex;
        flex-direction: column;
        background: #fff;
        .content1-1{
            border-bottom: 1px solid rgb(246,246,246);
            padding: 2rem 3rem 1rem 3rem;
            text-align: right;
            font-size: 18px;
            color: #666;
            .icon{ padding-left: 1rem;}
            .icon-copyright{
                font-size: 9px;
                color: rgb(246,246,246);
            }
        }
        .content1-2{
            padding: 2rem 5rem 2rem 3rem;
            font-size: 18px;
            color: #00338d;
            .content1-2-1{
                border: 2px solid;
                margin-right: 3rem;
                border-radius: 8px;
                padding: 0 1rem 1rem 1rem;
                color: #0091da;
                width: 100%;
                h3{ font-size: 18px; }
                p {
                    color: #333;
                    font-size: 16px;
                    line-height: 24px;
                    margin: 0;
                }
            }
        }
        .tab{ margin-right: 60px;}
    }
    // GRAY 
    .content2{
        padding: 1.5rem 3rem 2rem 3rem;
        color: #333;
        background: #dedede;
        font-size: 14px;
    }
    .row{
            display: inline-flex;
            justify-content: space-between;
    }
    .col{
        display: flex;
        flex-direction: column;
    }
    

    
`;

const info1 = [
    { name: "Glossary", link: "https://home.kpmg/kr/en/home/misc/glossary.html" },
    { name: "Events", link: "https://home.kpmg/kr/en/home/events.html" },
    { name: "Legal", link: "https://home.kpmg/kr/en/home/misc/legal.html" },
];

const mediaInfo = [
    {
        name: "linkedin",
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDdBQjk7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk3IiByPSI1Ni4wOTgiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0YxRjJGMjsiIGQ9Ik04OS42MTYsNjAuNjExdjIzLjEyOEg3Ni4yMDdWNjIuMTYxYzAtNS40MTgtMS45MzYtOS4xMTgtNi43OTEtOS4xMTgNCgkJCWMtMy43MDUsMC01LjkwNiwyLjQ5MS02Ljg3OCw0LjkwM2MtMC4zNTMsMC44NjItMC40NDQsMi4wNTktMC40NDQsMy4yNjh2MjIuNTI0SDQ4LjY4NGMwLDAsMC4xOC0zNi41NDYsMC00MC4zMjloMTMuNDExdjUuNzE1DQoJCQljLTAuMDI3LDAuMDQ1LTAuMDY1LDAuMDg5LTAuMDg5LDAuMTMyaDAuMDg5di0wLjEzMmMxLjc4Mi0yLjc0Miw0Ljk2LTYuNjYyLDEyLjA4NS02LjY2Mg0KCQkJQzgzLjAwMiw0Mi40NjIsODkuNjE2LDQ4LjIyNiw4OS42MTYsNjAuNjExTDg5LjYxNiw2MC42MTF6IE0zNC42NTYsMjMuOTY5Yy00LjU4NywwLTcuNTg4LDMuMDExLTcuNTg4LDYuOTY3DQoJCQljMCwzLjg3MiwyLjkxNCw2Ljk3LDcuNDEyLDYuOTdoMC4wODdjNC42NzcsMCw3LjU4NS0zLjA5OCw3LjU4NS02Ljk3QzQyLjA2MywyNi45OCwzOS4yNDQsMjMuOTY5LDM0LjY1NiwyMy45NjlMMzQuNjU2LDIzLjk2OXoNCgkJCSBNMjcuODY1LDgzLjczOUg0MS4yN1Y0My40MDlIMjcuODY1VjgzLjczOXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
        link: "https://www.linkedin.com/company/samjong-kpmg/",
    },
    {
        name: "youtube",
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0QyMjIxNTsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0E4MTQxMTsiIGQ9Ik0zODQuODU3LDE3MC4zMzljLTcuNjc3LDIuMzQzLTE1LjY4Miw0LjM1Ni0yMy42OTksNi4zNjENCgljLTU2Ljg4OSwxMi4wNjctMTMyLjc0MS0yMC42ODctMTY1LjQ5NSwzMi43NTRjLTI3LjMxNyw0Mi40OTQtMzUuOTQyLDk1LjY2OC02Ny4wMTcsMTMzLjY2M0wyOTQuNjI5LDUwOS4xDQoJYzExMC40Ny0xNi43MiwxOTcuNzczLTEwNC4wMzYsMjE0LjQ3Ni0yMTQuNTExTDM4NC44NTcsMTcwLjMzOXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzQxLjY0OSwxNTIuMzMzSDE3MC4zNTFjLTMzLjYwOCwwLTYwLjg1MiwyNy4yNDUtNjAuODUyLDYwLjg1MnY4NS42MzINCgljMCwzMy42MDgsMjcuMjQ1LDYwLjg1Miw2MC44NTIsNjAuODUyaDE3MS4yOThjMzMuNjA4LDAsNjAuODUyLTI3LjI0NSw2MC44NTItNjAuODUydi04NS42MzINCglDNDAyLjUwMSwxNzkuNTc4LDM3NS4yNTYsMTUyLjMzMywzNDEuNjQ5LDE1Mi4zMzNMMzQxLjY0OSwxNTIuMzMzeiBNMzAwLjQ5NCwyNjAuMTY3bC04MC4xMiwzOC4yMTINCgljLTIuMTM2LDEuMDE5LTQuNjAzLTAuNTM2LTQuNjAzLTIuOTAxdi03OC44MTRjMC0yLjQsMi41MzItMy45NTUsNC42Ny0yLjg3bDgwLjEyLDQwLjYwMQ0KCUMzMDIuOTQ3LDI1NS42MDIsMzAyLjkwNCwyNTkuMDE5LDMwMC40OTQsMjYwLjE2N0wzMDAuNDk0LDI2MC4xNjd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTM0MS42NDksMTUyLjMzM2gtODcuMzczdjc4LjYwNWw0Ni4yODcsMjMuNDU1YzIuMzg0LDEuMjA4LDIuMzQxLDQuNjI0LTAuMDY5LDUuNzczbC00Ni4yMTgsMjIuMDQ0DQoJdjc3LjQ1OWg4Ny4zNzNjMzMuNjA4LDAsNjAuODUyLTI3LjI0NSw2MC44NTItNjAuODUydi04NS42MzJDNDAyLjUwMSwxNzkuNTc4LDM3NS4yNTYsMTUyLjMzMywzNDEuNjQ5LDE1Mi4zMzN6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
        link: "https://www.youtube.com/channel/UCIosgGlczGvpX0ZehosdK6w",
    },
    {
        name: "twitter",
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTcgMTEyLjE5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NyAxMTIuMTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1NUFDRUU7IiBjeD0iNTYuMDk5IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0YxRjJGMjsiIGQ9Ik05MC40NjEsNDAuMzE2Yy0yLjQwNCwxLjA2Ni00Ljk5LDEuNzg3LTcuNzAyLDIuMTA5YzIuNzY5LTEuNjU5LDQuODk0LTQuMjg0LDUuODk3LTcuNDE3DQoJCQljLTIuNTkxLDEuNTM3LTUuNDYyLDIuNjUyLTguNTE1LDMuMjUzYy0yLjQ0Ni0yLjYwNS01LjkzMS00LjIzMy05Ljc5LTQuMjMzYy03LjQwNCwwLTEzLjQwOSw2LjAwNS0xMy40MDksMTMuNDA5DQoJCQljMCwxLjA1MSwwLjExOSwyLjA3NCwwLjM0OSwzLjA1NmMtMTEuMTQ0LTAuNTU5LTIxLjAyNS01Ljg5Ny0yNy42MzktMTQuMDEyYy0xLjE1NCwxLjk4LTEuODE2LDQuMjg1LTEuODE2LDYuNzQyDQoJCQljMCw0LjY1MSwyLjM2OSw4Ljc1Nyw1Ljk2NSwxMS4xNjFjLTIuMTk3LTAuMDY5LTQuMjY2LTAuNjcyLTYuMDczLTEuNjc5Yy0wLjAwMSwwLjA1Ny0wLjAwMSwwLjExNC0wLjAwMSwwLjE3DQoJCQljMCw2LjQ5Nyw0LjYyNCwxMS45MTYsMTAuNzU3LDEzLjE0N2MtMS4xMjQsMC4zMDgtMi4zMTEsMC40NzEtMy41MzIsMC40NzFjLTAuODY2LDAtMS43MDUtMC4wODMtMi41MjMtMC4yMzkNCgkJCWMxLjcwNiw1LjMyNiw2LjY1Nyw5LjIwMywxMi41MjYsOS4zMTJjLTQuNTksMy41OTctMTAuMzcxLDUuNzQtMTYuNjU1LDUuNzRjLTEuMDgsMC0yLjE1LTAuMDYzLTMuMTk3LTAuMTg4DQoJCQljNS45MzEsMy44MDYsMTIuOTgxLDYuMDI1LDIwLjU1Myw2LjAyNWMyNC42NjQsMCwzOC4xNTItMjAuNDMyLDM4LjE1Mi0zOC4xNTNjMC0wLjU4MS0wLjAxMy0xLjE2LTAuMDM5LTEuNzM0DQoJCQlDODYuMzkxLDQ1LjM2Niw4OC42NjQsNDMuMDA1LDkwLjQ2MSw0MC4zMTZMOTAuNDYxLDQwLjMxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
        link: "https://twitter.com/kpmg",
    },
    {
        name: "facebook",
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzQjU5OTg7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTcwLjIwMSw1OC4yOTRoLTEwLjAxdjM2LjY3Mkg0NS4wMjVWNTguMjk0aC03LjIxM1Y0NS40MDZoNy4yMTN2LTguMzQNCgkJYzAtNS45NjQsMi44MzMtMTUuMzAzLDE1LjMwMS0xNS4zMDNMNzEuNTYsMjEuODF2MTIuNTFoLTguMTUxYy0xLjMzNywwLTMuMjE3LDAuNjY4LTMuMjE3LDMuNTEzdjcuNTg1aDExLjMzNEw3MC4yMDEsNTguMjk0eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
        link: "https://www.facebook.com/KPMG",
    },

];


const info2 = [
    { name: "Contact", link: "https://home.kpmg/kr/en/home/misc/Contact.html" },
    { name: "Media", link: "https://home.kpmg/kr/en/home/media.html" },
    { name: "Alumni", link: "https://home.kpmg/kr/en/home/alumni.html" },
    { name: "Locations", link: "https://home.kpmg/kr/en/home/about/offices.html" },
];
const Footer = ({ language, display }) => {
    return (
        <StyledBox display={display}>
            <div className='content1'>
                <div className='row content1-1'>
                    <div className='row'>
                        {info1.map(i => <a key={i.name} href={i.link} target='blank' className='tab'><div>{i.name}</div></a>)}
                    </div>

                    <div className='col'>
                        <div className='tab2'>
                            {mediaInfo.map(i =>
                                <a key={i.name} href={i.link} target='blank' className='icon'><img width='32px' src={i.src} alt='media' /></a>
                            )}
                        </div>
                        <div className='icon-copyright'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>


                <div className='row content1-2'>
                    <div className='row'>
                        {info2.map(i => <a key={i.name} href={i.link} target='blank' className='tab'><div>{i.name}</div></a>)}

                    </div>
                    <a href='https://home.kpmg/kr/en/home.html' target='blank'><div className='col content1-2-1'>
                        <h3>KPMG Korea</h3>
                        {language === "ko"
                            ?
                            <p>KPMG Korea에 대한 더 많은 정보를 원하신다면 이곳을 클릭하세요.<br />KPMG KR. 웹페이지 링크 </p>
                            :
                            <p>Click to explore KPMG Korea.<br />Link to KPMG KR. Web </p>
                        }
                    </div></a>
                </div>


            </div>
            <div className='content2'>
                <p>© 2021 KPMG Samjong Accounting Corp., a Korea Limited Liability Company and a member firm of the KPMG global organization of independent member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved.</p>
                <p>For more detail about the structure of the KPMG global organization please visit <a href='https://home.kpmg/governance' target='blank'>https://home.kpmg/governance.</a></p>
            </div>

        </StyledBox>
    );
}

export default Footer;