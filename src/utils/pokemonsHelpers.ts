export async function fetchDataByUrl<T>(url: string): Promise<T> {
  try {
    const data = await fetch(url);

    return data.json();
  } catch (error) {
    throw new Error(error?.toString());
  }
}

export function getPageCount(count?: number): number | undefined {
  return count ? Math.floor(count / 12) : undefined;
}
