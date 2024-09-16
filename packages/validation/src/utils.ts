export function base64ToUint8Array(base64: string): Uint8Array {
	const binary_string = atob(base64);
	const length = binary_string.length;
	const bytes = new Uint8Array(length);

	for (let i = 0; i < length; i++) {
		bytes[i] = binary_string.charCodeAt(i);
	}

	return bytes;
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
	let binary = "";

	const bytes = new Uint8Array(buffer);

	for (let i = 0; i < bytes.byteLength; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}
