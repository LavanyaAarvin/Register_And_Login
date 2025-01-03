import * as xlsx from 'xlsx';

export const parseToExcel = (filePath : string) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    return xlsx.utils.sheet_add_json(sheet, {raw: true} as any)
}
