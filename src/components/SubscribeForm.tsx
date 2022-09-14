import React, { useState } from "react"
import style from "./SubscribeForm.module.sass"

export const SubscribeForm: React.FC<{
    id: string;
}> = ({id}) => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<"SUCCESS" | "ERROR">();

    const FORM_URL = `https://app.convertkit.com/forms/3359551/subscriptions`;
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        try {
            const response = await fetch(FORM_URL, {
                method: "post",
                body: data,
                headers: {
                    accept: "application/json",
                },
            });
            const json = await response.json();
            if (json.status === "success") {
                setStatus("SUCCESS");
                return;
            }
        } catch (err) {
            setStatus("ERROR");
            console.error(`Error submitting subscribe form: ${err}`);
        }
    }
    return <div className={style.subscribeForm} id={id}>
        {status? (status === "SUCCESS" ? <>
        <p>Welcome aboard {name? name: ' '}. Please check your email to confirm the subscription</p>
        </>
        :
        <>
        <p>Uh oh, something went wrong. Please click the button to try again,{" "}<button onClick={()=>setStatus(undefined)}>Try Again</button></p>
        </>
        ) : 
        <form onSubmit={handleSubmit}>
            <input
                aria-label="First name"
                name="fields[first_name]"
                placeholder="First name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name} />

            <input
                aria-label="Email address"
                name="email_address"
                placeholder="Email address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            <input type="submit" value="SUBSCRIBE"/>
        </form>
}
    </div>
}