import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";

import CreateProduct from './CreateProduct';
import { Await, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

describe('Soal Prioritas 1', () => {
    test('check value product name', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("name"), {target: {value: "name"}})
        expect(screen.getByTestId("name")).toHaveValue("name")

        fireEvent.input(screen.getByTestId("name"), {target: {value: ""}})
        expect(screen.getByTestId("name")).toBeFalsy
    });
    
    test('check value product Category', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("category"), {target: {value: "Makanan"}})
        expect(screen.getByTestId("category")).toHaveValue("Makanan")

        fireEvent.input(screen.getByTestId("category"), {target: {value: ""}})
        expect(screen.getByTestId("category")).toBeFalsy
    });

    test('check value product Image', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);
        expect(screen.getByTestId("image")).toBeFalsy
    });

    test('check value product Freshness', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.click(screen.getByDisplayValue("Brand New"), {target: {value: "Brand New"}})
        expect(screen.getByDisplayValue("Brand New")).toBeChecked()
    });

    test('check value product Description', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("description"), {target: {value: "deskripsi"}})
        expect(screen.getByTestId("description")).toHaveValue("deskripsi")

        fireEvent.input(screen.getByTestId("description"), {target: {value: ""}})
        expect(screen.getByTestId("description")).toBeFalsy
    });

    test('check value product Price', () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("price"), {target: {value: 10}})
        expect(screen.getByTestId("price")).toHaveValue(10)

        fireEvent.input(screen.getByTestId("price"), {target: {value: ""}})
        expect(screen.getByTestId("price")).toBeFalsy
    });
});

describe("Soal Prioritas 2", () => {

    test("regex Validation", async () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("name"), {target: {value: "ivanaa@"}})
        expect(screen.getByTestId("name")).toHaveValue("ivanaa@")

        fireEvent.click(screen.getByTestId("submit"))
        expect(await screen.findByText("Product Name Tidak Boleh mengandung Simbol")).toBeVisible()
    })

    test("Maksimum input 25 Char", async () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("name"), {target: {value: "ini ivan yang berupa banyak karakter melebihi dua puluh lima"}})
        expect(screen.getByTestId("name")).toHaveValue("ini ivan yang berupa banyak karakter melebihi dua puluh lima")

        fireEvent.click(screen.getByTestId("submit"))
        expect(await screen.findByText("Product Name maksimal 25 karakter!")).toBeVisible()
        })
        
    test("Memeriksa jika form inputan kosong", async () => {
        render(<BrowserRouter><CreateProduct/></BrowserRouter>);

        fireEvent.input(screen.getByTestId("name"), {target: {value: "ivanaa"}})
        fireEvent.input(screen.getByTestId("category"), {target: {value: "Makanan"}})
        fireEvent.click(screen.getByDisplayValue("Brand New"), {target: {value: "Brand New"}})
        fireEvent.input(screen.getByTestId("description"), {target: {value: "deskripsi"}})
        fireEvent.input(screen.getByTestId("price"), {target: {value: 10}})
        
        fireEvent.click(screen.getByTestId("submit"))
        expect(await screen.findByTestId("error")).toBeVisible(false)
    })
    
})