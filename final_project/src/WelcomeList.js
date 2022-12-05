function WelcomeList() {
    const names = ["john","michelle","pat"];
    const listNames = names.map((name)=>
    <li>Hello, {name}</li>);

    return (
        <ul>
            {listNames}
        </ul>
    )
}
export default WelcomeList;