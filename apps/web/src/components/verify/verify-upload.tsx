import type { JSX, FunctionComponent } from "preact";

function base64ToUint8Array(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export const VerifyUpload: FunctionComponent = () => {

	const onChange: JSX.InputEventHandler<HTMLInputElement> = (e) => {
		if (e.currentTarget.files && e.currentTarget.files[0]) {
			const file = e.currentTarget.files[0];
			const reader = new FileReader();

			reader.onload = async (e) => {
				const svg = e.target?.result as ArrayBuffer;

				// TODO: Place signature into svg body.
				const signature = base64ToUint8Array("Kv9JG3MbWW0XSGyzagJ2IPt570pv3jNPHM8dY+cJb9o43YTVjidNlpRfUex8M/5BaoW3qH3yYrM+GYZByrtrXw==");

				const publicKey = await crypto.subtle.importKey(
					"spki",
					// TODO: extract key to const variable
					base64ToUint8Array("MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfybPmda7WiwqVMphb1/ETpEvNDaUPA/y/mYUkgJz4t+CEskFu/wvIkmbsCtIHz80Vd0PJTYxBdXwKTM+IhCcMw=="),
					{
						name: "ECDSA",
						namedCurve: "P-256"
					},
					false,
					["verify"]
				);

				const isValid = await crypto.subtle.verify(
					{
						name: "ECDSA",
						hash: { name: "SHA-256" }
					},
					publicKey,
					signature,
					svg
				);

				console.log(isValid);
			};	

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<div class="min-h-view center">
			<input type="file" name="" id="" onChange={onChange} />
		</div>
	);
};
