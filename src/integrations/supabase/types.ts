export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agendamentos: {
        Row: {
          created_at: string | null
          data_hora_fim: string
          data_hora_inicio: string
          id: string
          observacoes: string | null
          paciente_id: string | null
          profissional_id: string | null
          servico_id: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data_hora_fim: string
          data_hora_inicio: string
          id?: string
          observacoes?: string | null
          paciente_id?: string | null
          profissional_id?: string | null
          servico_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data_hora_fim?: string
          data_hora_inicio?: string
          id?: string
          observacoes?: string | null
          paciente_id?: string | null
          profissional_id?: string | null
          servico_id?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agendamentos_paciente_id_fkey"
            columns: ["paciente_id"]
            isOneToOne: false
            referencedRelation: "pacientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agendamentos_profissional_id_fkey"
            columns: ["profissional_id"]
            isOneToOne: false
            referencedRelation: "profissionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agendamentos_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: false
            referencedRelation: "servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      bloqueios_horario: {
        Row: {
          created_at: string | null
          data_fim: string
          data_inicio: string
          id: string
          motivo: string | null
          profissional_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data_fim: string
          data_inicio: string
          id?: string
          motivo?: string | null
          profissional_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data_fim?: string
          data_inicio?: string
          id?: string
          motivo?: string | null
          profissional_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bloqueios_horario_profissional_id_fkey"
            columns: ["profissional_id"]
            isOneToOne: false
            referencedRelation: "profissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      disponibilidade: {
        Row: {
          created_at: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id: string
          profissional_id: string | null
          recorrente: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          dia_semana: number
          hora_fim: string
          hora_inicio: string
          id?: string
          profissional_id?: string | null
          recorrente?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          dia_semana?: number
          hora_fim?: string
          hora_inicio?: string
          id?: string
          profissional_id?: string | null
          recorrente?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "disponibilidade_profissional_id_fkey"
            columns: ["profissional_id"]
            isOneToOne: false
            referencedRelation: "profissionais"
            referencedColumns: ["id"]
          },
        ]
      }
      historico_agendamentos: {
        Row: {
          agendamento_id: string | null
          alterado_por: string | null
          created_at: string | null
          data_hora_anterior: string | null
          data_hora_nova: string | null
          id: string
          motivo: string | null
          status_anterior: string | null
          status_novo: string
        }
        Insert: {
          agendamento_id?: string | null
          alterado_por?: string | null
          created_at?: string | null
          data_hora_anterior?: string | null
          data_hora_nova?: string | null
          id?: string
          motivo?: string | null
          status_anterior?: string | null
          status_novo: string
        }
        Update: {
          agendamento_id?: string | null
          alterado_por?: string | null
          created_at?: string | null
          data_hora_anterior?: string | null
          data_hora_nova?: string | null
          id?: string
          motivo?: string | null
          status_anterior?: string | null
          status_novo?: string
        }
        Relationships: [
          {
            foreignKeyName: "historico_agendamentos_agendamento_id_fkey"
            columns: ["agendamento_id"]
            isOneToOne: false
            referencedRelation: "agendamentos"
            referencedColumns: ["id"]
          },
        ]
      }
      message_buffer: {
        Row: {
          chatid: string | null
          content: string
          created_at: string
          id: number
          idMessage: string | null
          timestamp: number | null
        }
        Insert: {
          chatid?: string | null
          content: string
          created_at?: string
          id?: never
          idMessage?: string | null
          timestamp?: number | null
        }
        Update: {
          chatid?: string | null
          content?: string
          created_at?: string
          id?: never
          idMessage?: string | null
          timestamp?: number | null
        }
        Relationships: []
      }
      pacientes: {
        Row: {
          cpf: string
          created_at: string | null
          data_nascimento: string | null
          email: string | null
          endereco: string | null
          id: string
          nome: string
          observacoes: string | null
          telefone: string
          updated_at: string | null
        }
        Insert: {
          cpf: string
          created_at?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          id?: string
          nome: string
          observacoes?: string | null
          telefone: string
          updated_at?: string | null
        }
        Update: {
          cpf?: string
          created_at?: string | null
          data_nascimento?: string | null
          email?: string | null
          endereco?: string | null
          id?: string
          nome?: string
          observacoes?: string | null
          telefone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profissionais: {
        Row: {
          created_at: string | null
          email: string | null
          especialidade: string
          horario_fim: string | null
          horario_inicio: string | null
          id: string
          nome: string
          registro_profissional: string | null
          status: string | null
          telefone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          especialidade: string
          horario_fim?: string | null
          horario_inicio?: string | null
          id?: string
          nome: string
          registro_profissional?: string | null
          status?: string | null
          telefone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          especialidade?: string
          horario_fim?: string | null
          horario_inicio?: string | null
          id?: string
          nome?: string
          registro_profissional?: string | null
          status?: string | null
          telefone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profissionais_servicos: {
        Row: {
          profissional_id: string
          servico_id: string
        }
        Insert: {
          profissional_id: string
          servico_id: string
        }
        Update: {
          profissional_id?: string
          servico_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profissionais_servicos_profissional_id_fkey"
            columns: ["profissional_id"]
            isOneToOne: false
            referencedRelation: "profissionais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profissionais_servicos_servico_id_fkey"
            columns: ["servico_id"]
            isOneToOne: false
            referencedRelation: "servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      servicos: {
        Row: {
          created_at: string | null
          descricao: string | null
          duracao: number
          id: string
          nome: string
          preco: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          descricao?: string | null
          duracao: number
          id?: string
          nome: string
          preco?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          descricao?: string | null
          duracao?: number
          id?: string
          nome?: string
          preco?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
