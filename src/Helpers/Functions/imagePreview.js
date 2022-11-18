export function imagePreview(element, file) {
    console.log(element, file)
    element.src = URL.createObjectURL(file);

}