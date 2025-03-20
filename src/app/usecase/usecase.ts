

export interface UseCase<inputDTO, OutputDTO> {
    
    execute(input: inputDTO): Promise<OutputDTO>;

}