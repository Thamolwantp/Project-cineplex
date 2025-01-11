export default async function DispalyNewsByIdPage({
    params
}: {
    params: { id: number }
}) {

    params = await params

    return (
        <>
            <div>
                หน้าแสดงข้อมูลข่าวที่ {params.id}
            </div>
        </>
    )
}