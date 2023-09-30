import './App.scss'

const Butt = () => {

return (
    <div class="my-50 mx-auto">
    <div class="container">
        <div class="layout">
            <h2>Your Form</h2>
            <form>
                <input placeholder="First name" class="first-name"/>
                <input placeholder="Last name" class="last-name"/>
                <input placeholder="Age" type="number" class="age"/>
                <input placeholder="Address" class="address"/>
                <input placeholder="Place of work" class="place-of-work"/>
                <input placeholder="Job title" class="job-title"/>
                <input placeholder="Phone number" class="phone-number"/>
                <input placeholder="Skype" class="skype"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="template">
            <h2>Expected Result</h2>
            <div class="template-form">
                <input placeholder="First name"/>
                <input placeholder="Last name"/>
                <input placeholder="Age" type="number"/>
                <input placeholder="Address"/>
                <input placeholder="Place of work"/>
                <input placeholder="Job title"/>
                <input placeholder="Phone number"/>
                <input placeholder="Skype"/>
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</div>
)

}


export default Butt