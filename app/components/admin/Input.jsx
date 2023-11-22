export const Authinputs = ({ id, type, label, name, placeholder, register, errors, required }) => {
    return (
        <div>
            <label htmlFor={id} className={`block mb-2 text-sm font-medium ${errors[id]?'text-rose-500':'text-gray-900 '}`}>{label}</label>
            <input type={type} name={name} id={id} className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 outline-none
            ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-800'}`}  {...register(id, { required })} placeholder={placeholder} />
            {errors[id] && (
                <p className="text-rose-500 text-xs px-2">{errors[id]?.message}</p>
            )}
        </div>
    )
}