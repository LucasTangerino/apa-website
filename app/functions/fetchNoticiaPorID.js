


export async function fetchNoticiasPorID(id) {
    const response = await fetch('/api/obterNoticiaPorID?id=' + id, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    const data = await response.json();
    return data.rows;
  }