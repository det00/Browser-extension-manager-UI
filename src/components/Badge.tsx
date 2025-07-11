const Badge = ({texto}: {texto: string}) => {
    return (
        <div className="flex items-center justify-center bg-neutral-0 px-6 rounded-full shadow-lg">
            <span className="font-medium">{texto}</span>
        </div>
    );
};

export default Badge;