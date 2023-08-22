

type ModalProps = {
    message: string;
    showModal?: boolean;
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AlertModal({ message, showModal, setShowModal }: ModalProps) {

    if(showModal === true && setShowModal){
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }
    return (
        <>
            {showModal && (
                <div className={`bg-white shadow-md shadow-black
                text-green-600 h-12 flex justify-center items-center 
                fixed top-4 right-1 font-light z-50 w-[250px] rounded-sm text-lg`}>
                    <div>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </>
    );
}
