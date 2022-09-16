import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { BsMailbox } from 'react-icons/bs'

const SRNew: NextPage = () => {
    const [letterlimit, setLL] = useState(0);
    return (
        <>
            <Head>
                <title>New box - SnapRaise</title>
                <meta name="description" content="Make a new box to get posts." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="form-control w-3/4 text-center pos-center">
                <label className="label">
                    <span className="label-text">New box</span>
                    <span className="label-text-alt">{letterlimit} / 200</span>
                </label>
                <select className="select select-bordered select-sm w-full">
                    <option disabled>Font</option>
                    <option selected>Noto Sans Japanese (ja)</option>
                    <option>Sawarabi Gothic (ja)</option>
                    <option>Zen Maru Gothic (ja)</option>
                    <option>Yomogi (ja)</option>
                    <option>Noto Sans (en)</option>
                </select>
                <textarea className="textarea textarea-bordered h-36 leading-tight rounded-lg border-base focus:border-accent mt-1" placeholder="Box descripiton (short than 200 letters)" onChange={(e) => setLL(e.target.value.length)} maxLength={200} minLength={1}></textarea>
                <select className="select select-bordered select-sm w-full">
                    <option disabled>share with</option>
                    <option>Everyone</option>
                    <option selected>Following</option>
                    <option disabled>--- Circle</option>
                </select>
                <button className="btn w-full gap-2 mt-4"><BsMailbox />Create Box</button>
            </div>
        </>
    )
}

export default SRNew