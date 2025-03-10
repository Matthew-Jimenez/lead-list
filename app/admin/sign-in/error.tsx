'use client';


type Params = {
    error?: Error;
};

const SignInError = ({ error }: Params) => {

    return (
        <div>
            <h1>{error?.message}</h1>
        </div>
    );
};

export default SignInError;