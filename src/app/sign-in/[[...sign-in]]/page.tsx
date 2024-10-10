
import { SignIn } from "@clerk/nextjs";



const SignInPage = () => {
    return (
        <div className="justify-center flex max-h-screen p-6">
            <SignIn />
        </div>
    );
};

export default SignInPage;