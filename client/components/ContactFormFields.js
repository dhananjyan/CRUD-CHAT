import { TextInput } from "./InputFields";
import { required, email } from "../utils/validate";

export default function RegisterFormFields(props) {
    const { register, errors } = props;
    return (
        <>
            <TextInput
                label="First name"
                placeholder="First name"
                register={register("firstName", { validate: { required } })}
                errors={errors?.firstName}
            />
            <TextInput
                label="Last name"
                placeholder="Last name"
                register={register("lastName", { validate: { required } })}
                errors={errors?.lastName}
            />
            <TextInput
                label="Email"
                placeholder="Email"
                register={register("email", { validate: { required, email } })}
                errors={errors?.email}
            />
            <TextInput
                label="Phone number"
                placeholder="Phone number"
                register={register("phoneNumber", { validate: { required } })}
                errors={errors?.phoneNumber}
            />
            <TextInput
                label="Company name"
                placeholder="Company name"
                register={register("company", { validate: { required } })}
                errors={errors?.company}
            />
        </>
    )
}
