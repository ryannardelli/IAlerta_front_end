import { Bounce, ToastContainer } from "react-toastify";

type MessageContainerProps = {
    children: React.ReactNode;
}

export function MessageContainer({ children }: MessageContainerProps) {
    return(
        <>

            {children}

            <ToastContainer
                position='top-center'
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Bounce}
            />
        </>
    );
}
