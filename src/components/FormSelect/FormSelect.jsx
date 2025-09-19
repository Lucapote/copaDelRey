import styles from "./FormSelect.module.css"

export const FormSelect = ({ 
    id, 
    name, 
    label, 
    value, 
    onChange, 
    options, 
    required = false, 
    placeholder = "Selecciona una opción",
    disabled = false,
    className = "" 
}) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={id}>{label}:</label>
            <select
                className={`${styles.input} ${disabled ? styles.disabled : ''}`}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};