import { SignUp } from "@clerk/nextjs";




const SignUpPage = () => {
    return (
        <div className="justify-center flex max-h-screen p-6">
            <SignUp />
        </div>
    );
};

export default SignUpPage;
