export const FilterContacts = ({ findContact }) => {
    return (
        <>
            <h2>Find contact by name</h2>
            <input type="text" onChange={(e) => findContact(e.target.value)} />
        </>
    )
}
