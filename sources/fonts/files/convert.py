import os
import glob

from fontTools import subset

current_directory = os.getcwd()

ttf_files = glob.glob(os.path.join(current_directory, '*.ttf'))

os.makedirs("./output", exist_ok=True)

for ttf_file in ttf_files:
	file_name_with_extension = os.path.basename(ttf_file)
	file_name_without_extension = os.path.splitext(file_name_with_extension)[0]

	print(f"Converting: {file_name_without_extension}")

	subset.main([
		ttf_file,
		"--unicodes-file=./unicodes.txt",
		"--no-ignore-missing-unicodes",
		"--layout-features=*",
		f"--output-file=../output/{file_name_without_extension}.woff2",
		"--flavor=woff2"
	])
