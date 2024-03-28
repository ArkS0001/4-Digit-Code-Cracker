def decrypt_four_digit_code(encrypted_code):
    # Brute force all possible combinations
    for code in range(10000):
        if str(code).zfill(4) == encrypted_code:
            return str(code).zfill(4)

    return "Code not found"

# Example usage:
encrypted_code = "1234"  # Replace this with your encrypted code
decrypted_code = decrypt_four_digit_code(encrypted_code)
print("Decrypted code:", decrypted_code)
