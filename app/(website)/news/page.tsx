import Link from "next/link"
import newsdb from "./db"

async function getAllNews() {
    return newsdb
}

export default async function NewsPage() {

    const news_list = await getAllNews()

    return (
        <>
            <div>
                หน้าแสดงรายการข่าว
            </div>

            <div>
                <ul>
                    {news_list.map(item => (
                        <li key={item.id}>
                            <Link href={`/news/${item.id}`}>
                            {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}