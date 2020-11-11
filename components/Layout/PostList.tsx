import React from 'react'

import { listItem } from './ItemList'
import ContentSection from './ContentSection'
import { Heading, P, Div, A, Box } from './primatives'

const Post: React.FC<{
	hLevel?: 1 | 2 | 3 | 4
	post: listItem
	RenderContent?: ({ post: listItem }) => JSX.Element
}> = ({ post, RenderContent, hLevel }) => {
	const { title, content, date, to } = post
	function createMarkup() {
		return { __html: content }
	}

	return (
		<Box as={'article'}>
			<Div
				className="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal"
				style={{ fontFamily: 'Georgia,serif' }}
			>
				<Div className="font-sans">
					<Heading
						level={hLevel}
						className="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl"
					>
						<A href={post.to}>{title}</A>
					</Heading>
					{date && (
						<P className="text-sm md:text-base font-normal text-grey-dark">
							{date}
						</P>
					)}
				</Div>
				{RenderContent ? (
					<RenderContent post={post} />
				) : (
					<div
						className="py-6"
						dangerouslySetInnerHTML={createMarkup()}
					/>
				)}
			</Div>
		</Box>
	)
}
const PostList = (props: {
	posts: listItem[]
	title?: string
	hLevel?: 1 | 2 | 3 | 4
	RenderContent?: ({ post: listItem }) => JSX.Element
}) => {
	const { posts, RenderContent } = props
	let hLevel = props.hLevel ? props.hLevel : 1
	return (
		<ContentSection
			hLevel={hLevel}
			title={props.title ? props.title : 'Posts'}
		>
			<>
				{posts.map((post) => (
					<Post
						key={post.title}
						post={post}
						RenderContent={RenderContent}
						//@ts-ignore
						hLevel={hLevel + 1}
					/>
				))}
			</>
		</ContentSection>
	)
}

export default PostList
