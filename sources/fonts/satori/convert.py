import os
import glob
from fontTools import subset

current_directory = os.getcwd()

# Glob all .ttf files in subdirectories
ttf_files = glob.glob(os.path.join(current_directory, '**', '*.ttf'), recursive=True)

for ttf_file in ttf_files:
	file_name_with_extension = os.path.basename(ttf_file)
	file_name_without_extension = os.path.splitext(file_name_with_extension)[0]

	# Get the relative path of the ttf file to preserve directory structure
	relative_path = os.path.relpath(ttf_file, current_directory)
	output_path = os.path.join("output", os.path.dirname(relative_path))

	# Create the output subdirectory if it doesn't exist
	os.makedirs(output_path, exist_ok=True)

	print(f"Converting: {file_name_without_extension} in {output_path}")

	subset.main([
		ttf_file,
		"--unicodes-file=./unicodes.txt",
		"--no-ignore-missing-unicodes",
		"--layout-features=*",
		f"--output-file={os.path.join(output_path, file_name_without_extension)}.woff",
		"--flavor=woff"
	])
